import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [936],
	set: Set,

	name: {
		fr: "Carmadura",
		en: "Armarouge",
		es: "Armarouge",
		it: "Armarouge",
		pt: "Armarouge",
		de: "Crimanzo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Armure Incandescente",
			en: "Scorching Armor",
			es: "Armadura Abrasadora",
			it: "Corazza Ustionante",
			pt: "Armadura Ardente",
			de: "Sengende Rüstung"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Queimado.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Artillerie Vapeur",
			en: "Steam Artillery",
			es: "Artillería de Vapor",
			it: "Artiglieria Vapore",
			pt: "Artilharia de Vapor",
			de: "Dampfgeschütz"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 725124
	}
}

export default card