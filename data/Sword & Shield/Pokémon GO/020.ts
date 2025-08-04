import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [80],
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tumbling Tackle",
			fr: "Tacle Titubant",
			es: "Placaje Acrobático",
			it: "Torpore",
			pt: "Ataque Resvalador",
			de: "Taumeltackle"
		},

		effect: {
			en: "Both Active Pokémon are now Asleep.",
			fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
			es: "Ambos Pokémon Activos pasan a estar Dormidos.",
			it: "Entrambi i Pokémon attivi vengono addormentati.",
			pt: "Ambos os Pokémon Ativos agora estão Adormecidos.",
			de: "Beide Aktiven Pokémon schlafen jetzt."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Twilight Inspiration",
			fr: "Inspiration Nocturne",
			es: "Inspiración Crepuscular",
			it: "Ispirazione Crepuscolare",
			pt: "Inspiração Crepuscular",
			de: "Zwielichtinspiration"
		},

		effect: {
			en: "You can use this attack only if your opponent has exactly 1 Prize card remaining. Take 2 Prize cards.",
			fr: "Vous ne pouvez utiliser cette attaque que s'il reste exactement une carte Récompense à votre adversaire. Vous récupérez 2 cartes Récompense.",
			es: "Puedes usar este ataque solo si a tu rival le queda exactamente 1 carta de Premio. Coge 2 cartas de Premio.",
			it: "Puoi usare questo attacco solo se il tuo avversario ha esattamente una carta Premio rimanente. Prendi due carte Premio.",
			pt: "Você só pode usar este ataque se seu oponente tiver exatamente 1 carta de Prêmio restante. Pegue 2 cartas de Prêmio.",
			de: "Du kannst diese Attacke nur einsetzen, wenn dein Gegner genau 1 verbleibende Preiskarte hat. Nimm 2 Preiskarten."
		}
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664557,
		tcgplayer: 276950
	}
}

export default card