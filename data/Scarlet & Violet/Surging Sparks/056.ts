import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Chien-Pao",
		fr: "Baojian",
		es: "Chien-Pao",
		it: "Chien-Pao",
		pt: "Chien-Pao",
		de: "Baojian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Snow Sink",
			fr: "Enlisement Neigeux",
			es: "Hundimiento Nieve",
			it: "Neveaffondo",
			pt: "Afundar na Neve",
			de: "Schneesenke"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Stade en jeu.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar un Estadio en juego.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare una carta Stadio in gioco.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar um Estádio em jogo.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Icicle Loop",
			fr: "Boucle Stalactite",
			es: "Bucle Témpano",
			it: "Gelocircuito",
			pt: "Loop Geladinho",
			de: "Eiszapfenschleife"
		},

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma Energia ligada a este Pokémon na sua mão.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Yuya Oka"
}

export default card
