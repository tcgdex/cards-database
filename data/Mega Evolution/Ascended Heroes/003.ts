import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Erika's Vileplume ex",
		fr: "Rafflesia-ex d'Erika",
		es: "Vileplume ex de Erika",
		'es-mx': "Vileplume ex de Erika",
		de: "Erikas Giflor-ex",
		it: "Vileplume-ex di Erika",
		pt: "Vileplume ex da Érica"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lovely Fragrance",
			fr: "Parfum Délicieux",
			es: "Fragancia Cautivadora",
			'es-mx': "Fragancia Sublime",
			de: "Lieblicher Duft",
			it: "Fragranza Deliziosa",
			pt: "Fragrância Encantadora"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Heal 30 damage from each of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Soignez 30 dégâts de chacun de vos Pokémon.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cura 30 puntos de daño a cada uno de tus Pokémon.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Heile 30 Schadenspunkte bei jedem deiner Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Cura ciascuno dei tuoi Pokémon da 30 danni.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Cure 30 pontos de dano de cada um dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Bloom Powder",
			fr: "Poudre Floraison",
			es: "Polvo Floración",
			'es-mx': "Polvo Floral",
			de: "Blütenpuder",
			it: "Polvere di Fioritura",
			pt: "Pó de Florescer"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido y Envenenado.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675815,
		cardmarket: 869614
	}
}

export default card