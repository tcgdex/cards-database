import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	illustrator: "Yuya Oka",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Elder Tree Barrier",
			'fr-fr': "Barrière Vieillarbre",
			'es-es': "Barrera Árbol Viejo",
			'it-it': "Barriera Alberantico",
			'pt-br': "Barreira da Árvore Anciã",
			'de-de': "Urgehölzbarriere"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon V, your opponent can't take any Prize cards for it.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon-V de votre adversaire, ce dernier ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon V de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon-V del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon V do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isto.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon-V deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'de-de': "Gigastoß"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674028,
				tcgplayer: 283884
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674028,
				tcgplayer: 283884
			}
		},
	],
}

export default card
