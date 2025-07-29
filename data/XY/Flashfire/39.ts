import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				es: "Rayo Confuso",
				it: "Stordiraggio",
				pt: "Raio da Confusão",
				de: "Konfustrahl"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
				es: "Caída Maldita",
				it: "Caduta Maledetta",
				pt: "Queda Amaldiçoada",
				de: "Verfluchter Fall"
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 4 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				de: "Verteile 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

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
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281522
	}
}

export default card
