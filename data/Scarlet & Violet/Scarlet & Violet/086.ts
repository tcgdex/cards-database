import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [282],
	set: Set,

	name: {
		en: "Gardevoir ex",
		fr: "Gardevoir-ex",
		es: "Gardevoir ex",
		it: "Gardevoir-ex",
		pt: "Gardevoir ex",
		de: "Guardevoir-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psychic Embrace",
			fr: "Enlacement Psy",
			es: "Abrazo Psíquico",
			it: "Psicoabbraccio",
			pt: "Abraço Psíquico",
			de: "Psycho-Umarmung"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Basic {P} Energy card from your discard pile to 1 of your {P} Pokémon. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon. You can't use this Ability on a Pokémon that would be Knocked Out.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {P} de base de votre pile de défausse à l'un de vos Pokémon {P}. Si vous avez attaché une Énergie à un Pokémon de cette façon, placez 2 marqueurs de dégâts sur ce Pokémon-là. Vous ne pouvez pas utiliser ce talent si cela doit mettre K.O. ce Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {P} Básica de tu pila de descartes a uno de tus Pokémon {P}. Si has unido Energía a un Pokémon de esta manera, pon 2 contadores de daño en ese Pokémon. No puedes usar esta habilidad en un Pokémon que fuese a quedar Fuera de Combate.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon {P} una carta Energia base {P} dalla tua pila degli scarti tutte le volte che vuoi. Se hai assegnato dell'Energia a un Pokémon in questo modo, metti due segnalini danno su quel Pokémon. Non puoi usare questa abilità su un Pokémon che verrebbe messo KO.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {P} Básica da sua pilha de descarte a 1 dos seus Pokémon {P}. Se você ligou Energia a um Pokémon desta forma, coloque 2 contadores de dano naquele Pokémon. Você não pode usar esta Habilidade em um Pokémon que seria Nocauteado.",
			de: "Beliebig oft während deines Zuges kannst du 1 Basis-{P}-Energiekarte aus deinem Ablagestapel an 1 deiner {P}-Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, lege 2 Schadensmarken auf jenes Pokémon. Du kannst diese Fähigkeit nicht bei einem Pokémon einsetzen, das kampfunfähig würde."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Miracle Force",
			fr: "Force Miracle",
			es: "Fuerza Milagrosa",
			it: "Forza Miracolosa",
			pt: "Força Milagrosa",
			de: "Wunderkraft"
		},

		effect: {
			en: "This Pokémon recovers from all Special Conditions.",
			fr: "Ce Pokémon guérit de tous les États Spéciaux.",
			es: "Este Pokémon se recupera de todas las Condiciones Especiales.",
			it: "Questo Pokémon guarisce da tutte le condizioni speciali.",
			pt: "Este Pokémon se recupera de todas as Condições Especiais.",
			de: "Dieses Pokémon erholt sich von allen Speziellen Zuständen."
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "N-DESIGN Inc."
}

export default card