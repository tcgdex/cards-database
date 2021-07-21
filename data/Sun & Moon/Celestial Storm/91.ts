import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mining",
				fr: "Minage",
				es: "Minería",
				it: "Scavo in Miniera",
				pt: "Mineração",
				de: "Bergbau"
			},
			effect: {
				en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If that card is a Pokémon Tool card, instead of putting it into your hand, you may attach it to 1 of your Pokémon that doesn’t already have a Pokémon Tool attached to it.",
				fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Si cette carte est une carte Outil Pokémon, plutôt que de l’ajouter à votre main, vous pouvez l’attacher à l’un de vos Pokémon auquel aucun Outil Pokémon n’est attaché.",
				es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja. Si es una carta de Herramienta Pokémon, en vez de ponerla en tu mano, puedes unirla a 1 de tus Pokémon que aún no tenga ninguna Herramienta Pokémon unida a él.",
				it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Se è una carta Oggetto Pokémon, invece di aggiungerla a quelle che hai in mano, puoi assegnarla a uno dei tuoi Pokémon che non ha già un Oggetto Pokémon assegnato.",
				pt: "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho. Se aquela carta for uma carta de Ferramenta Pokémon, ao invés de colocá-la na sua mão, você poderá ligá-la a 1 dos seus Pokémon que ainda não tenha uma carta de Ferramenta Pokémon ligada a ele.",
				de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. Wenn jene Karte eine Pokémon-Ausrüstung ist, kannst du sie, anstatt sie auf deine Hand zu nehmen, an 1 deiner Pokémon anlegen, an das noch keine Pokémon-Ausrüstung angelegt ist."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				fr: "Arracher d’un Coup de Dent",
				es: "Despedazar",
				it: "Addentare",
				pt: "Mordida Estraçalhante",
				de: "Abbeißen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 30 more damage (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 30 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 30 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 30 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
