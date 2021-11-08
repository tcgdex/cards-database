import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Team Yell Grunt",
		fr: "Sbire de la Team Yell",
		es: "Recluta del Team Yell",
		it: "Recluta del Team Yell",
		pt: "Recruta da Equipe Yell",
		de: "Rüpel von Team Yell"
	},

	illustrator: "nagimiso",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put an Energy attached to 1 of your opponent's Pokémon into their hand.",
		fr: "Ajoutez à la main de votre adversaire une Énergie attachée à l'un de ses Pokémon.",
		es: "Pon 1 Energía unida a 1 de los Pokémon de tu rival en su mano.",
		it: "Prendi un'Energia assegnata a uno dei Pokémon del tuo avversario e aggiungila alle carte che ha in mano.",
		pt: "Coloque 1 Energia ligada a 1 dos Pokémon do seu oponente na mão dele(a).",
		de: "Gib deinem Gegner 1 an eins seiner Pokémon angelegte Energie auf seine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
