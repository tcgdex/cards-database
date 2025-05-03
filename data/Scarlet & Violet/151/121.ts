import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [121],
	set: Set,

	name: {
		fr: "Staross",
		en: "Starmie",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Comète Mystérieuse",
			en: "Mysterious Comet",
			es: "Cometa Misterioso",
			it: "Cometa Misteriosa",
			pt: "Cometa Misterioso",
			de: "Geheimnisvoller Komet"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous avez placé au moins un marqueur de dégâts de cette façon, défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, discard this Pokémon and all attached cards.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en uno de los Pokémon de tu rival. Si has puesto algún contador de daño de esta manera, descarta este Pokémon y todas las cartas unidas a él.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario. Se hai messo dei segnalini danno in questo modo, scarta questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente. Se você colocou algum contador de dano desta forma, descarte este Pokémon e todas as cartas ligadas a ele.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du auf diese Weise mindestens 1 Schadensmarke platziert hast, lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Attaque Rapide",
			en: "Speed Attack",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			pt: "Ataque em Velocidade",
			de: "Tempoangriff"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false
	}
}

export default card
