import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		it: "Heatran",
		pt: "Heatran",
		de: "Heatran"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Incandescent Body",
			fr: "Corps Incandescent",
			es: "Cuerpo Incandescente",
			it: "Corpo Incandescente",
			pt: "Corpo Incandescente",
			de: "Innere Weißglut"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Queimado.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Steel Burst",
			fr: "Explosion Acier",
			es: "Explosión Acero",
			it: "Scoppiacciaio",
			pt: "Explosão de Aço",
			de: "Stahlausbruch"
		},

		effect: {
			en: "Discard all Metal Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez toutes les Énergies Metal de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta todas las Energías Metal de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta tutte le Energie Metal da questo Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte todas as Energias Metal deste Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			de: "Lege alle Metal-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		normal: false
	}
}

export default card
