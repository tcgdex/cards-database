import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Eternatus",
		fr: "Éthernatos Radieux",
		es: "Eternatus Radiante",
		it: "Eternatus Lucente",
		pt: "Eternatus Radiante",
		de: "Strahlendes Endynalos"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Climactic Gate",
			fr: "Portail du Summum",
			es: "Portal Culminante",
			it: "Portale Apogeo",
			pt: "Portal Absoluto",
			de: "Kulminationsportal"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 Pokémon VMAX and put them onto your Bench. Then, shuffle your deck. If you use this Ability, your turn ends.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon-VMAX, puis les placer sur votre Banc. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon VMAX y ponerlos en tu Banca. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon-VMAX e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por até 2 Pokémon VMAX no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach bis zu 2 Pokémon-VMAX durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Fire", "Darkness", "Colorless"],

		name: {
			en: "Power Beam",
			fr: "Puissant Rayon",
			es: "Rayo de Luz Poderoso",
			it: "Raggiopotenza",
			pt: "Raio de Poder",
			de: "Power-Strahl"
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691824,
		tcgplayer: 478216
	}
}

export default card
