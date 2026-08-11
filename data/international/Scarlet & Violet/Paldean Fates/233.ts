import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [282],
	set: Set,

	name: {
		'en-us': "Gardevoir ex",
		'fr-fr': "Gardevoir-ex",
		'es-es': "Gardevoir ex",
		'it-it': "Gardevoir-ex",
		'de-de': "Guardevoir-ex",
		'pt-br': "Gardevoir ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psychic Embrace",
			'fr-fr': "Enlacement Psy",
			'es-es': "Abrazo Psíquico",
			'it-it': "Psicoabbraccio",
			'de-de': "Psycho-Umarmung",
			'pt-br': "Abraço Psíquico"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Basic {P} Energy card from your discard pile to 1 of your {P} Pokémon. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon. You can't use this Ability on a Pokémon that would be Knocked Out.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {P} de base de votre pile de défausse à l'un de vos Pokémon {P}. Si vous avez attaché une Énergie à un Pokémon de cette façon, placez 2 marqueurs de dégâts sur ce Pokémon-là. Vous ne pouvez pas utiliser ce talent si cela doit mettre K.O. ce Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {P} Básica de tu pila de descartes a uno de tus Pokémon {P}. Si has unido Energía a un Pokémon de esta manera, pon 2 contadores de daño en ese Pokémon. No puedes usar esta habilidad en un Pokémon que fuese a quedar Fuera de Combate.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon {P} una carta Energia base {P} dalla tua pila degli scarti tutte le volte che vuoi. Se hai assegnato dell'Energia a un Pokémon in questo modo, metti due segnalini danno su quel Pokémon. Non puoi usare questa abilità su un Pokémon che verrebbe messo KO.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Basis-{P}-Energiekarte aus deinem Ablagestapel an 1 deiner {P}-Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, lege 2 Schadensmarken auf jenes Pokémon. Du kannst diese Fähigkeit nicht bei einem Pokémon einsetzen, das kampfunfähig würde.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {P} Básica da sua pilha de descarte a 1 dos seus Pokémon {P}. Se você ligou Energia a um Pokémon desta forma, coloque 2 contadores de dano naquele Pokémon. Você não pode usar esta Habilidade em um Pokémon que seria Nocauteado."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Miracle Force",
			'fr-fr': "Force Miracle",
			'es-es': "Fuerza Milagrosa",
			'it-it': "Forza Miracolosa",
			'de-de': "Wunderkraft",
			'pt-br': "Força Milagrosa"
		},

		effect: {
			'en-us': "This Pokémon recovers from all Special Conditions.",
			'fr-fr': "Ce Pokémon guérit de tous les États Spéciaux.",
			'es-es': "Este Pokémon se recupera de todas las Condiciones Especiales.",
			'it-it': "Questo Pokémon guarisce da tutte le condizioni speciali.",
			'de-de': "Dieses Pokémon erholt sich von allen Speziellen Zuständen.",
			'pt-br': "Este Pokémon se recupera de todas as Condições Especiais."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751780,
				tcgplayer: 535085,
				cardtrader: 274417
			}
		},
	],

	suffix: "ex",
	illustrator: "Kuroimori",

	
}

export default card
