import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		pt: "Froslass",
		de: "Frosdedje"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Studio Bora Inc.",
	dexId: [478],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Frost Over",
			fr: "Givre",
			de: "Überfrieren"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie  de votre pile de défausse à l'un de vos Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 {W}-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Crystal Breath",
			fr: "Souffle de Cristal",
			de: "Kristallhauch"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It spits out cold air of nearly -60 degrees Fahrenheit to freeze its quarry. It brings frozen prey back to its lair and neatly lines them up.",
		de: "Es friert seine Beute mit -50 ºC kalter Luft ein, nimmt sie dann in seinen Unterschlupf mit und reiht sie dort fein säuberlich auf."
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574284,
				tcgplayer: 246801
			}
		},
	],
}

export default card
