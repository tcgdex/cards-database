import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [80],
	set: Set,

	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tumbling Tackle",
			'fr-fr': "Tacle Titubant",
			'es-es': "Placaje Acrobático",
			'it-it': "Torpore",
			'pt-br': "Ataque Resvalador",
			'de-de': "Taumeltackle"
		},

		effect: {
			'en-us': "Both Active Pokémon are now Asleep.",
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormis.",
			'es-es': "Ambos Pokémon Activos pasan a estar Dormidos.",
			'it-it': "Entrambi i Pokémon attivi vengono addormentati.",
			'pt-br': "Ambos os Pokémon Ativos agora estão Adormecidos.",
			'de-de': "Beide Aktiven Pokémon schlafen jetzt."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Twilight Inspiration",
			'fr-fr': "Inspiration Nocturne",
			'es-es': "Inspiración Crepuscular",
			'it-it': "Ispirazione Crepuscolare",
			'pt-br': "Inspiração Crepuscular",
			'de-de': "Zwielichtinspiration"
		},

		effect: {
			'en-us': "You can use this attack only if your opponent has exactly 1 Prize card remaining. Take 2 Prize cards.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que s'il reste exactement une carte Récompense à votre adversaire. Vous récupérez 2 cartes Récompense.",
			'es-es': "Puedes usar este ataque solo si a tu rival le queda exactamente 1 carta de Premio. Coge 2 cartas de Premio.",
			'it-it': "Puoi usare questo attacco solo se il tuo avversario ha esattamente una carta Premio rimanente. Prendi due carte Premio.",
			'pt-br': "Você só pode usar este ataque se seu oponente tiver exatamente 1 carta de Prêmio restante. Pegue 2 cartas de Prêmio.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn dein Gegner genau 1 verbleibende Preiskarte hat. Nimm 2 Preiskarten."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665660,
				tcgplayer: 276950
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665660,
				tcgplayer: 276950
			}
		},
	],
}

export default card
