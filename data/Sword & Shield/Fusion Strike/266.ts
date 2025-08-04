import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		en: "Inteleon VMAX",
		fr: "Lézargus VMAX",
		es: "Inteleon VMAX",
		it: "Inteleon VMAX",
		pt: "Inteleon VMAX",
		de: "Intelleon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		en: "Inteleon V",
		fr: "Lézargus-V",
		es: "Inteleon V",
		it: "Inteleon-V",
		pt: "Inteleon V",
		de: "Intelleon-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kazuma Koda",

	abilities: [{
		type: "Ability",

		name: {
			en: "Double Gunner",
			fr: "Double Tireur",
			de: "Doppelschütze",
			es: "Doble Pistoletazo",
			pt: "Gatilho Duplo",
			it: "Doppio Mitragliere"
		},

		effect: {
			en: "You must discard a {W} Energy card from your hand in order to use this Ability. Once during your turn, you may choose 2 of your opponent's Benched Pokémon and put 2 damage counters on each of them.",
			fr: "Vous devez défausser une carte Énergie {W} de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez choisir 2 des Pokémon de Banc de votre adversaire, puis placer 2 marqueurs de dégâts sur chacun d'eux.",
			de: "Du musst 1 {W}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Pokémon auf der Bank deines Gegners wählen und 2 Schadensmarken auf jedes von ihnen legen.",
			es: "Debes descartar 1 carta de Energía {W} de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes elegir 2 de los Pokémon en Banca de tu rival y poner 2 contadores de daño en cada uno de ellos.",
			pt: "Você deve descartar 1 carta de Energia {W} da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá escolher 2 dos Pokémon no Banco do seu oponente e colocar 2 contadores de dano em cada um deles.",
			it: "Devi scartare una carta Energia {W} che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi scegliere due dei Pokémon nella panchina del tuo avversario e mettere due segnalini danno su ciascuno di essi."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "G-Max Spiral",
			fr: "Spirale G-Max",
			de: "Giga-Spirale",
			es: "Gigaespiral",
			pt: "Espiral G-Max",
			it: "Gigaspirale"
		},

		damage: "70+",

		effect: {
			en: "You may put an Energy attached to this Pokémon into your hand. If you do, this attack does 70 more damage.",
			fr: "Vous pouvez ajouter à votre main une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			de: "Du kannst 1 an dieses Pokémon angelegte Energie auf deine Hand nehmen. Wenn du das machst, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			es: "Puedes poner 1 Energía unida a este Pokémon en tu mano. Si lo haces, este ataque hace 70 puntos de daño más.",
			pt: "Você pode colocar 1 Energia ligada a este Pokémon na sua mão. Se fizer isto, este ataque causará 70 pontos de dano a mais.",
			it: "Puoi prendere un'Energia assegnata a questo Pokémon e aggiungerla alle carte che hai in mano. Se lo fai, questo attacco infligge 70 danni in più."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582213,
		tcgplayer: 253171
	}
}

export default card