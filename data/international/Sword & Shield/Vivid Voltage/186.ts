import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		'fr-fr': "Astronelle VMAX",
		'en-us': "Orbeetle VMAX",
		'es-es': "Orbeetle VMAX",
		'it-it': "Orbeetle VMAX",
		'pt-br': "Orbeetle VMAX",
		'de-de': "Maritellit VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Astronelle-V",
		'en-us': "Orbeetle V",
		'es-es': "Orbeetle V",
		'it-it': "Orbeetle-V",
		'pt-br': "Orbeetle V",
		'de-de': "Maritellit-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Faisceau Étrange",
			'en-us': "Eerie Beam",
			'es-es': "Rayo Espeluznante",
			'it-it': "Raggiomistero",
			'pt-br': "Raio Inquietante",
			'de-de': "Unheimlicher Strahl"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may put 1 damage counter on each of your opponent's Pokémon.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes poner 1 contador de daño en cada uno de los Pokémon de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi mettere un segnalino danno su ciascuno dei Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá colocar 1 contador de dano em cada um dos Pokémon do seu oponente.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Schadensmarke auf jedes Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Onde G-Max",
			'en-us': "G-Max Wave",
			'es-es': "Gigaonda",
			'it-it': "Gigaonda",
			'pt-br': "Onda G-Max",
			'de-de': "Giga-Welle"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
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


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 512640,
				tcgplayer: 226387
			}
		},
	],
}

export default card
