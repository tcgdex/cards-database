import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope",
		de: "Zwirrklop"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Duskull",
		fr: "Skelenox"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cursed Glare",
				fr: "Regard maléfique",
				de: "Verfluchender Blick"
			},
			effect: {
				en: "As long as Dusclops is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
				fr: "Tant que Teraclope est votre Pokémon Actif, votre adversaire ne peut pas attacher de cartes Énergie spéciale (cartes Énergie  et  exceptées) de sa main à son Pokémon Actif.",
				de: "Solange Zwirrklop dein Aktives Pokémon ist, kann dein Gegner keine Spezialenergiekarten (außer - und -Energiekarten) von seiner Hand an sein Aktives Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-wisp",
				fr: "Feu follet",
				de: "Irrlicht"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Shield",
				fr: "Bouclier psychique",
				de: "Psychoschild"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dusclops by your opponent's Pokémon-ex during your opponent's next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Teraclope par les Pokémon-ex de votre adversaire lors de son prochain tour.",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Zwirrklop von gegnerischen Pokémon-ex zugefügt werden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277098,
		tcgplayer: 85026
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
