import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V",
		pt: "Zacian V",
		de: "Zacian V",
		fr: "Zacian V",
		es: "Zacian V",
		it: "Zacian V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Intrepid Sword",
			pt: "Espada Intrépida",
			de: "Kühnes Schwert",
			fr: "Lame Indomptable",
			es: "Espada Indómita",
			it: "Spada Indomita"
		},

		effect: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of {M} Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia {M} que encontrar lá a este Pokémon. Coloque as outras cartas na sua mão. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du dir die obersten 3 Karten deines Decks anschauen und beliebig viele {M}-Energiekarten, die du dort findest, an dieses Pokémon anlegen. Nimm die anderen Karten auf deine Hand. Wenn du diese Fähigkeit einsetzt, endet dein Zug.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis attacher à ce Pokémon le nombre voulu de cartes Énergie {M} que vous y trouvez. Ajoutez les autres cartes à votre main. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes mirar las 3 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía {M} que encuentres entre ellas a este Pokémon. Pon el resto de las cartas en tu mano. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia {M} presenti tra esse a questo Pokémon. Aggiungi le altre carte a quelle che hai in mano. Se usi questa abilità, il tuo turno finisce."
		}
	}],

	attacks: [{
		name: {
			en: "Brave Blade",
			pt: "Lâmina Valente",
			de: "Couragierte Klinge",
			fr: "Lame Vaillante",
			es: "Cuchilla Osada",
			it: "Baldalama"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [888],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
