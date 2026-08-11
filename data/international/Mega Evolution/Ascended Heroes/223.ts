import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'es-mx': "Numel",
		'de-de': "Camaub",
		'it-it': "Numel",
		'pt-br': "Numel"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [322],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Incandescent Body",
			'fr-fr': "Corps Incandescent",
			'es-es': "Cuerpo Incandescente",
			'es-mx': "Cuerpo Incandescente",
			'de-de': "Innere Weißglut",
			'it-it': "Corpo Incandescente",
			'pt-br': "Corpo Incandescente"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante ahora está Quemado.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Queimado."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'es-mx': "Combustión",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "The magma in its body reaches 2,200 degrees Fahrenheit. Its hump gets smaller when it uses Fire-type moves.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869834,
				tcgplayer: 676035
			}
		}
	],
}

export default card
