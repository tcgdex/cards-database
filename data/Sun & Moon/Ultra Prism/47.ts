import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		404,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Disconnect",
				fr: "Déconnexion",
				es: "Desconectar",
				it: "Disconnessione",
				pt: "Desconexão",
				de: "Unterbrechen"
			},
			effect: {
				en: "Your opponent can’t play any Item cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhuma carta de Item da própria mão durante a próxima vez dele(a) jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
