import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran",
		'de-de': "Heatran"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Incandescent Body",
			'fr-fr': "Corps Incandescent",
			'es-es': "Cuerpo Incandescente",
			'it-it': "Corpo Incandescente",
			'pt-br': "Corpo Incandescente",
			'de-de': "Innere Weißglut"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Queimado.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Steel Burst",
			'fr-fr': "Explosion Acier",
			'es-es': "Explosión Acero",
			'it-it': "Scoppiacciaio",
			'pt-br': "Explosão de Aço",
			'de-de': "Stahlausbruch"
		},

		effect: {
			'en-us': "Discard all {M} Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez toutes les Énergies {M} de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta todas las Energías {M} de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta tutte le Energie {M} da questo Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte todas as Energias {M} deste Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege alle {M}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769297,
				tcgplayer: 550167
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769297,
				tcgplayer: 550167
			}
		},
	],

	illustrator: "AKIRA EGAWA",

}

export default card
