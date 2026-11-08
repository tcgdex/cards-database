import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [348],
	set: Set,

	name: {
		'en-us': "Armaldo",
		'fr-fr': "Armaldo",
		'es-es': "Armaldo",
		'it-it': "Armaldo",
		'pt-br': "Armaldo",
		'de-de': "Armaldo"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
		'es-es': "Anorith",
		'it-it': "Anorith",
		'pt-br': "Anorith",
		'de-de': "Anorith"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Reaping Claw",
			'fr-fr': "Griffe Faucheuse",
			'es-es': "Pinza Segadora",
			'it-it': "Falciartiglio",
			'pt-br': "Garra Ceifadora",
			'de-de': "Erntende Klaue"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has 100 HP or less remaining, it is Knocked Out.",
			'fr-fr': "S'il reste 100 PV ou moins au Pokémon Actif de votre adversaire, il est mis K.O.",
			'es-es': "Si al Pokémon Activo de tu rival le quedan 100 PS o menos, queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha 100 PS o meno rimanenti, viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver PS restante de 100 ou menos, ele será Nocauteado.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners 100 oder weniger verbleibende KP hat, ist es kampfunfähig."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Boulder Crush",
			'fr-fr': "Rocher Écrasant",
			'es-es': "Alud de Rocas",
			'it-it': "Macignata",
			'pt-br': "Rocha Esmagadora",
			'de-de': "Felsenquetscher"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "After evolution, this Pokémon emerged onto land. Its lower body has become stronger, and blows from its tail are devastating.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682143,
				tcgplayer: 451750
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682143,
				tcgplayer: 451750
			}
		},
	],
}

export default card
