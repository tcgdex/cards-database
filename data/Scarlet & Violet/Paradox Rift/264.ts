import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Counter Catcher",
		fr: "Attrape-Riposte",
		es: "Capturador Contraataque",
		it: "Contracchiappa-Pokémon",
		pt: "Pegador de Contra-ataque",
		de: "Konterfänger"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		en: "You can use this card only if you have more Prize cards remaining than your opponent.\n\nSwitch in 1 of your opponent's Benched Pokémon to the Active Spot.",
		fr: "Vous pouvez utiliser cette carte seulement s'il vous reste plus de cartes Récompense qu'à votre adversaire.\n\nEnvoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
		es: "Puedes usar esta carta solo si te quedan más cartas de Premio que a tu rival.\nCambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		it: "Puoi usare questa carta solo se hai più carte Premio rimanenti del tuo avversario.\n\nSostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
		pt: "Você só pode usar esta carta se tiver mais cartas de Prêmio restantes do que seu oponente.\nMande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
		de: "Du kannst diese Karte nur einsetzen, wenn du mehr verbleibende Preiskarten hast als dein Gegner.\nWechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Toyste Beach"
}

export default card