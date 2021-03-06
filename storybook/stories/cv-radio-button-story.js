import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SvTemplateView from '../_storybook/views/sv-template-view/sv-template-view';
// import consts from '../_storybook/utils/consts';
import knobsHelper from '../_storybook/utils/knobs-helper';

import CvRadioButtonNotesMD from '@carbon/vue/src/components/cv-radio-button/cv-radio-button-notes.md';
import CvRadioButton from '@carbon/vue/src/components/cv-radio-button/cv-radio-button';
import CvRadioGroup from '@carbon/vue/src/components/cv-radio-button/cv-radio-group';

const storiesDefault = storiesOf('Components/CvRadioButton', module);
const storiesExperimental = storiesOf('Experimental/CvRadioButton', module);
import { versions, setVersion } from '@carbon/vue/src/internal/feature-flags';

const preKnobs = {
  checked1: {
    group: 'attr1',
    type: boolean,
    config: ['radio-1:checked', true], // consts.CONFIG],
    prop: {
      name: 'checked',
      type: Boolean,
    },
  },
  disabled2: {
    group: 'attr2',
    type: boolean,
    config: ['radio-2:disabled', true], // consts.CONFIG],
    prop: {
      name: 'disabled',
      type: Boolean,
    },
  },
  vModel: {
    group: 'each',
    value: `v-model="radioVal"`,
    inline: true,
  },
  events: {
    group: 'attr',
    value: `@change="actionChange"`,
  },
};

const variants = [
  { name: 'default', excludes: ['vModel', 'events'] },
  { name: 'events', excludes: ['vModel'] },
  { name: 'vModel', excludes: ['events'] },
];

const storySet = knobsHelper.getStorySet(variants, preKnobs);

for (const version of versions(true)) {
  const stories = version.experimental && !version.default ? storiesDefault : storiesExperimental;

  for (const story of storySet) {
    stories.add(
      story.name,
      () => {
        setVersion(version);
        const settings = story.knobs();

        // ----------------------------------------------------------------

        const templateString = `
  <cv-radio-group ${settings.group.attr}>
    <cv-radio-button name="group-1" label="radio-1" value="value-1" ${settings.group.attr1}${settings.group.each} />
    <cv-radio-button name="group-1" label="radio-2" value="value-2" ${settings.group.attr2}${settings.group.each} />
    <cv-radio-button name="group-1" label="radio-3" value="value-3"${settings.group.each}/>
  </cv-radio-group>
  `;

        // ----------------------------------------------------------------

        const templateViewString = `
    <sv-template-view
      :sv-experimental="experimental"
      sv-margin
      sv-source='${templateString.trim()}'>
      <template slot="component">${templateString}</template>

      <template slot="other">
        <div v-if="${templateString.indexOf('v-model') > 0}">V-Model:
          <input type="radio" value="value-1" v-model="radioVal" group="story">Radio 1</input>
          <input type="radio" value="value-2" v-model="radioVal" group="story">Radio 2</input>
          <input type="radio" value="value-3" v-model="radioVal" group="story">Radio 3</input>
        </div>
      </template>
    </sv-template-view>
  `;

        return {
          components: { CvRadioButton, CvRadioGroup, SvTemplateView },
          template: templateViewString,
          props: settings.props,
          data() {
            return {
              experimental: version.experimental,
              radioVal: 'value-2',
            };
          },
          methods: {
            actionChange: action('CV Radio Button - change'),
          },
        };
      },
      {
        notes: { markdown: CvRadioButtonNotesMD },
      }
    );
  }
}
