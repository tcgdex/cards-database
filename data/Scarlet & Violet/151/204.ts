import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Charisme de Giovanni",
		en: "Giovanni's Charisma",
		es: "Carisma de Giovanni",
		it: "Carisma di Giovanni",
		pt: "Carisma do Giovanni",
		de: "Giovannis Charisma"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		fr: "Ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif. Dans ce cas, attachez une carte Énergie de votre main à votre Pokémon Actif.",
		en: "Put an Energy attached to your opponent's Active Pokémon into their hand. If you do, attach an Energy card from your hand to your Active Pokémon.",
		es: "Pon 1 Energía unida al Pokémon Activo de tu rival en su mano. Si lo haces, une 1 carta de Energía de tu mano a tu Pokémon Activo.",
		it: "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano. Se lo fai, assegna al tuo Pokémon attivo una carta Energia dalla tua mano.",
		pt: "Coloque uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele. Se fizer isto, ligue uma carta de Energia da sua mão ao seu Pokémon Ativo.",
		de: "Gib deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand. Wenn du das machst, lege 1 Energiekarte aus deiner Hand an dein Aktives Pokémon an."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Hideki Ishikawa",

	thirdParty: {
		cardmarket: 733707
	}
}

export default card