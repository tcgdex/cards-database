import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Talonflame ex",
		fr: "Flambusard‑ex",
		de: "Fiaro-ex",
		es: "Talonflame ex",
		it: "Talonflame-ex",
		pt: "Talonflame ex",
		'es-mx': "Talonflame ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Excited Dive",
			fr: "Plongeon Dynamique",
			de: "Begeisterter Sturzflug",
			es: "Impulso en Picado",
			it: "Fervorpicchiata",
			pt: "Mergulho Animado",
			'es-mx': "Descenso Vibrante"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your hand, and if you have any Colorless Mega Evolution Pokémon ex in play, you may use this Ability. Put this Pokémon onto your Bench.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre main et que vous avez au moins un Pokémon-ex Méga-Évolution Colorless en jeu, vous pouvez utiliser ce talent. Placez ce Pokémon sur votre Banc.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Hand ist und wenn du mindestens 1 Colorless-Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege dieses Pokémon auf deine Bank.",
			es: "Una vez durante tu turno, si este Pokémon está en tu mano y si tienes algún Pokémon ex Megaevolución Colorless en juego, puedes usar esta habilidad. Pon este Pokémon en tu Banca.",
			it: "Una sola volta durante il tuo turno, se hai questo Pokémon in mano e se hai dei Pokémon-ex Megaevoluzione Colorless in gioco, puoi usare questa abilità. Metti questo Pokémon nella tua panchina.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua mão e se você tiver algum Pokémon ex de Megaevolução Colorless em jogo, você poderá usar esta Habilidade. Coloque este Pokémon no seu Banco.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu mano y si tienes algún Pokémon ex Megaevolución Colorless en juego, puedes usar esta Habilidad. Pon este Pokémon en tu Banca."
		}
	}],

	attacks: [{
		name: {
			en: "Talon Hunt",
			fr: "Serres Chasseuses",
			de: "Klauenjagd",
			es: "Garra Cazadora",
			it: "Artiglio Cacciatore",
			pt: "Grifas de Caça",
			'es-mx': "Garra Cazadora"
		},

		effect: {
			en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			es: "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Puedes buscar en tu mazo hasta 2 cartas y ponerlas en tu mano. Después, baraja tu mazo."
		},

		damage: 150,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,

	thirdParty: {
		tcgplayer: 728050,
		cardmarket: 918916
	}
}

export default card