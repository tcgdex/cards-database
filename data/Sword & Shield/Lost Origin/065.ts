import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [93],
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
			es: "Caída Maldita",
			it: "Caduta Maledetta",
			pt: "Queda Amaldiçoada",
			de: "Verfluchter Fall"
		},

		effect: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674074,
		tcgplayer: 283939
	}
}

export default card