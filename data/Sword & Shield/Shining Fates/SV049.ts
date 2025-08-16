import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [222],
	set: Set,

	name: {
		fr: "Corayon de Galar",
		en: "Galarian Corsola",
		es: "Corsola de Galar",
		it: "Corsola di Galar",
		pt: "Corsola de Galar",
		de: "Galar-Corasonn"
	},

	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Chute Maudite",
			en: "Cursed Drop",
			es: "Caída Maldita",
			it: "Caduta Maledetta",
			pt: "Queda Amaldiçoada",
			de: "Verfluchter Fall"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		},

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

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Watch your step when wandering areas oceans once covered. What looks like a stone could be this Pokémon, and it will curse you if you kick it."
	}
}

export default card
