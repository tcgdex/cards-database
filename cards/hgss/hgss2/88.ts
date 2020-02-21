import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/88/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/88/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/88/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Darkness Howl",
			fr: "Obscurlement",
		},
		text: {
			en: "This attack does 20 damage to each Pokémon in play (both yours and your opponent's) (excluding any Darkness Pokémon). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chaque Pokémon en jeu (les vôtres et ceux de votre adversaire), à l'exception des Pokémon Darkness. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Claw",
			fr: "Griffes puissantes",
		},
		text: {
			en: "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par les Poké-Powers, les Poké-Bodies ou tout autre effet actif sur le Pokémon Défenseur.",
		},
		damage: 60
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Tail",
			fr: "Queue titanesque",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
