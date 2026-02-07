import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		es: "Empoleon",
		it: "Empoleon",
		pt: "Empoleon",
		de: "Impoleon"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Diving Draw",
				fr: "Plonge et Pioche",
				es: "Robo Buceo",
				it: "Pescafonda",
				pt: "Saque Mergulho",
				de: "Unterwasserzieher"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar una carta de tu mano. Si lo haces, roba 2 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, pesca due carte.",
				pt: "Uma vez na sua vez de jogar (antes de atacar), você pode descartar um card da sua mão. Se fizer isso, compre 2 cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 2 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Attack Command",
				fr: "Ordre d'Assaut"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280357,
		tcgplayer: 85201
	}
}

export default card
