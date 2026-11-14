import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark ex",
		fr: "Zoroark‑ex",
		de: "Zoroark-ex",
		es: "Zoroark ex",
		it: "Zoroark-ex",
		pt: "Zoroark ex",
		'es-mx': "Zoroark ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Riotous Beating",
			fr: "Méchante Raclée",
			de: "Prügelnde Meute",
			es: "Paliza Desenfrenada",
			it: "Pestaggio Vandalico",
			pt: "Batidas Desenfreadas",
			'es-mx': "Paliza Desenfrenada"
		},

		effect: {
			en: "This attack does 20 damage for each of your Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			it: "Questo attacco infligge 20 danni per ciascuno dei tuoi Pokémon in gioco.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego."
		},

		damage: "20×",
		cost: ["Darkness"]
	}, {
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
			de: "Schlitzender Schlag",
			es: "Golpe Cuchillazo",
			it: "Lacerattacco",
			pt: "Ataque Cortante",
			'es-mx': "Golpe Cortante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Slashing Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cortante."
		},

		damage: 210,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 728040,
				cardmarket: 918892
			}
		}
	],
}

export default card