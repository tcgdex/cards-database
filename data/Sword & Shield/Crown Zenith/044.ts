import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Explosiveness",
			fr: "Explosivité",
			es: "Explosividad",
			it: "Carattere Esplosivo",
			pt: "Tendência Explosiva",
			de: "Explosivität"
		},

		effect: {
			en: "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.",
			fr: "Si ce Pokémon est dans votre main lorsque vous préparez la partie, vous pouvez le placer face cachée en tant que Pokémon Actif.",
			es: "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo como tu Pokémon Activo.",
			it: "Se hai questo Pokémon in mano durante l'allestimento del gioco, puoi metterlo a faccia in giù come tuo Pokémon attivo.",
			pt: "Se este Pokémon estiver na sua mão enquanto estiver preparando seu jogo, você poderá colocá-lo virado para baixo como seu Pokémon Ativo.",
			de: "Wenn dieses Pokémon bei der Spielvorbereitung auf deiner Hand ist, kannst du es verdeckt als dein Aktives Pokémon hinlegen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Seeking Fang",
			fr: "Croc Chercheur",
			es: "Colmillo Rastreador",
			it: "Zanna Esploratrice",
			pt: "Presa de Caça",
			de: "Suchender Reißzahn"
		},

		effect: {
			en: "Search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Dresseur, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Entrenador, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Allenatore, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Treinador no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Trainerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card