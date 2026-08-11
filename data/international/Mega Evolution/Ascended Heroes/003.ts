import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Vileplume ex",
		'fr-fr': "Rafflesia-ex d'Erika",
		'es-es': "Vileplume ex de Erika",
		'es-mx': "Vileplume ex de Erika",
		'de-de': "Erikas Giflor-ex",
		'it-it': "Vileplume-ex di Erika",
		'pt-br': "Vileplume ex da Érica"
	},

	evolveFrom: {
		'en-us': "Erika's Gloom",
		'fr-fr': "Ortide d'Erika",
		'es-es': "Gloom de Erika",
		'es-mx': "Gloom de Erika",
		'de-de': "Erikas Duflor",
		'it-it': "Gloom di Erika",
		'pt-br': "Gloom da Érica",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lovely Fragrance",
			'fr-fr': "Parfum Délicieux",
			'es-es': "Fragancia Cautivadora",
			'es-mx': "Fragancia Sublime",
			'de-de': "Lieblicher Duft",
			'it-it': "Fragranza Deliziosa",
			'pt-br': "Fragrância Encantadora"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Heal 30 damage from each of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Soignez 30 dégâts de chacun de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Heile 30 Schadenspunkte bei jedem deiner Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Cura ciascuno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Cure 30 pontos de dano de cada um dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Bloom Powder",
			'fr-fr': "Poudre Floraison",
			'es-es': "Polvo Floración",
			'es-mx': "Polvo Floral",
			'de-de': "Blütenpuder",
			'it-it': "Polvere di Fioritura",
			'pt-br': "Pó de Florescer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido y Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869614,
				tcgplayer: 675815
			}
		}
	],
}

export default card