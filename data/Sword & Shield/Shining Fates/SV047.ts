import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		fr: "Ponyta de Galar",
		en: "Galarian Ponyta",
		es: "Ponyta de Galar",
		it: "Ponyta di Galar",
		pt: "Ponyta de Galar",
		de: "Galar-Ponita"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Choc Mental",
			en: "Psy Bolt",
			es: "Rayo Psi",
			it: "Psico",
			pt: "Raio Psíquico",
			de: "Mentale Blockade"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "This Pokémon will look into your eyes and read the contents of your heart. If it finds evil there, it promptly hides away."
	}
}

export default card
