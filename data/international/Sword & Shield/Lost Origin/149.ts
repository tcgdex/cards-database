import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [775],
	set: Set,

	name: {
		'en-us': "Komala",
		'fr-fr': "Dodoala",
		'es-es': "Komala",
		'it-it': "Komala",
		'pt-br': "Komala",
		'de-de': "Koalelu"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "All Just a Dream",
			'fr-fr': "Juste un Rêve",
			'es-es': "Solo un Sueño",
			'it-it': "Tutto un Sogno",
			'pt-br': "Apenas um Sonho",
			'de-de': "Alles nur ein Traum"
		},

		effect: {
			'en-us': "If this Pokémon is Asleep and is Knocked Out by damage from an attack from your opponent's Pokémon, your opponent can't take any Prize cards for it.",
			'fr-fr': "Si ce Pokémon est Endormi et est mis K.O. par les dégâts d'une attaque des Pokémon de votre adversaire, votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			'es-es': "Si este Pokémon está Dormido y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			'it-it': "Se questo Pokémon è addormentato e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			'pt-br': "Se este Pokémon estiver Adormecido e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isto.",
			'de-de': "Wenn dieses Pokémon schläft und durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Collapse",
			'fr-fr': "Effondrement",
			'es-es': "Colapso",
			'it-it': "Collassare",
			'pt-br': "Colapso",
			'de-de': "Kollaps"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'it-it': "Questo Pokémon viene addormentato.",
			'pt-br': "Este Pokémon agora está Adormecido.",
			'de-de': "Dieses Pokémon schläft jetzt."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674158,
				tcgplayer: 284077
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674158,
				tcgplayer: 284077
			}
		},
	],
}

export default card
