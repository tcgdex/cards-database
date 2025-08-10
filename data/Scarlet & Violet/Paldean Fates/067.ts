import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [1000],
	set: Set,

	name: {
		en: "Gholdengo",
		fr: "Gromago",
		es: "Gholdengo",
		it: "Gholdengo",
		pt: "Gholdengo",
		de: "Monetigo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Lavish Hospitality",
			fr: "Hospitalité Prodigue",
			es: "Hospitalidad Fastuosa",
			it: "Ospitalità Sfarzosa",
			pt: "Hospitalidade Luxuosa",
			de: "Großzügige Gastfreundschaft"
		},

		effect: {
			en: "You may attach any number of Basic {M} Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Vous pouvez attacher le nombre voulu de cartes Énergie {M} de base de votre main à vos Pokémon comme il vous plaît.",
			es: "Puedes unir cualquier cantidad de cartas de Energía {M} Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Puoi assegnare ai tuoi Pokémon un numero qualsiasi di carte Energia base {M} dalla tua mano nel modo che preferisci.",
			pt: "Você pode ligar qualquer número de cartas de Energia {M} Básica da sua mão aos seus Pokémon como desejar.",
			de: "Du kannst beliebig viele Basis-{M}-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Scintillating Surfing",
			fr: "Surf Scintillant",
			es: "Surfeo Resplandeciente",
			it: "Surf Scintillante",
			pt: "Surfe Extravagante",
			de: "Sensationelles Surfen"
		},

		effect: {
			en: "Flip a coin for each {M} Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie {M} attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía {M} unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia {M} assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia {M} ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {M}-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Mitsuhiro Arita"
}

export default card
