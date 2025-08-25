import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [775],
	set: Set,

	name: {
		en: "Komala",
		fr: "Dodoala",
		es: "Komala",
		it: "Komala",
		pt: "Komala",
		de: "Koalelu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "All Just a Dream",
			fr: "Juste un Rêve",
			es: "Solo un Sueño",
			it: "Tutto un Sogno",
			pt: "Apenas um Sonho",
			de: "Alles nur ein Traum"
		},

		effect: {
			en: "If this Pokémon is Asleep and is Knocked Out by damage from an attack from your opponent's Pokémon, your opponent can't take any Prize cards for it.",
			fr: "Si ce Pokémon est Endormi et est mis K.O. par les dégâts d'une attaque des Pokémon de votre adversaire, votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			es: "Si este Pokémon está Dormido y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			it: "Se questo Pokémon è addormentato e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			pt: "Se este Pokémon estiver Adormecido e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isto.",
			de: "Wenn dieses Pokémon schläft und durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Collapse",
			fr: "Effondrement",
			es: "Colapso",
			it: "Collassare",
			pt: "Colapso",
			de: "Kollaps"
		},

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
			es: "Este Pokémon pasa a estar Dormido.",
			it: "Questo Pokémon viene addormentato.",
			pt: "Este Pokémon agora está Adormecido.",
			de: "Dieses Pokémon schläft jetzt."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674158,
		tcgplayer: 284077
	}
}

export default card