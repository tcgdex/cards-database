import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Aurorus",
		fr: "Dragmara",
		es: "Aurorus",
		it: "Aurorus",
		pt: "Aurorus",
		de: "Amagarga"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		699,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Amaura",
		fr: "Amagara",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Wall",
				fr: "Mur de Givre",
				es: "Muro Gélido",
				it: "Murogelo",
				pt: "Muro Congelado",
				de: "Frostwand"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Evoluzione.",
				pt: "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon de Evolução.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Entwicklungs-Pokémon zugefügt wird."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard Burn",
				fr: "Blizzard Étourdissant",
				es: "Quemadura de Hielo",
				it: "Pirobora",
				pt: "Queimadura de Neve",
				de: "Blizzardbrand"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 355547
	}
}

export default card
