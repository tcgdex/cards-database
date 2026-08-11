import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [936],
	set: Set,

	name: {
		'fr-fr': "Carmadura",
		'en-us': "Armarouge",
		'es-es': "Armarouge",
		'it-it': "Armarouge",
		'pt-br': "Armarouge",
		'de-de': "Crimanzo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Charbambin",
		'en-us': "Charcadet",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Armure Incandescente",
			'en-us': "Scorching Armor",
			'es-es': "Armadura Abrasadora",
			'it-it': "Corazza Ustionante",
			'pt-br': "Armadura Ardente",
			'de-de': "Sengende Rüstung"
		},

		effect: {
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Queimado.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Artillerie Vapeur",
			'en-us': "Steam Artillery",
			'es-es': "Artillería de Vapor",
			'it-it': "Artiglieria Vapore",
			'pt-br': "Artilharia de Vapor",
			'de-de': "Dampfgeschütz"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725124,
				tcgplayer: 509756,
				cardtrader: 255604
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725124,
				tcgplayer: 509756,
				cardtrader: 255604
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
