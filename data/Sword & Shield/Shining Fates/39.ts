import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir V",
		en: "Indeedee V",
		es: "Indeedee V",
		it: "Indeedee V",
		pt: "Indeedee V",
		de: "Servol V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Veille",
			en: "Watch Over",
			es: "Cuidados",
			it: "Cura Protettiva",
			pt: "Cuidar",
			de: "Obhut"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
			it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen."
		}
	}],

	attacks: [{
		name: {
			fr: "Psyko",
			en: "Psychic",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 60 more damage for each Energy attached to your opponent’s Active Pokémon.",
			es: "Este ataque hace 60 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 60 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 60 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 60 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card