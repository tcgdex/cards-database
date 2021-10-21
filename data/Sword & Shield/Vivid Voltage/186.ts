import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Astronelle VMAX",
		en: "Orbeetle VMAX",
		es: "Orbeetle VMAX",
		it: "Orbeetle VMAX",
		pt: "Orbeetle VMAX",
		de: "Maritellit VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		fr: "Astronelle-V",
		en: "Orbeetle V",
		es: "Orbeetle V",
		it: "Orbeetle-V",
		pt: "Orbeetle V",
		de: "Maritellit-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Faisceau Étrange",
			en: "Eerie Beam",
			es: "Rayo Espeluznante",
			it: "Raggiomistero",
			pt: "Raio Inquietante",
			de: "Unheimlicher Strahl"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may put 1 damage counter on each of your opponent's Pokémon.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes poner 1 contador de daño en cada uno de los Pokémon de tu rival.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi mettere un segnalino danno su ciascuno dei Pokémon del tuo avversario.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá colocar 1 contador de dano em cada um dos Pokémon do seu oponente.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Schadensmarke auf jedes Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		name: {
			fr: "Onde G-Max",
			en: "G-Max Wave",
			es: "Gigaonda",
			it: "Gigaonda",
			pt: "Onda G-Max",
			de: "Giga-Welle"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "50+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card