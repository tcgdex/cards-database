import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix",
		de: "Zobiris",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		'es-mx': "Sableye"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Lure Out",
			fr: "Appât Attrayant",
			de: "Hervorlocken",
			es: "Sacar a la Luz",
			it: "Stanare",
			pt: "Ludibriar",
			'es-mx': "Sacar a la Luz"
		},

		effect: {
			en: "Reveal the top 5 cards of your opponent's deck. You may choose any number of Basic Pokémon you find there and put those Pokémon onto their Bench. Your opponent shuffles the other cards back into their deck.",
			fr: "Montrez les 5 cartes du dessus du deck de votre adversaire. Vous pouvez choisir le nombre voulu de Pokémon de base que vous y trouvez, puis les placer sur son Banc. Votre adversaire mélange les autres cartes avec son deck.",
			de: "Decke die obersten 5 Karten des Decks deines Gegners auf. Du kannst beliebig viele Basis-Pokémon, die du dort findest, wählen und jene Pokémon auf seine Bank legen. Dein Gegner mischt die anderen Karten zurück in sein Deck.",
			es: "Enseña las 5 primeras cartas de la baraja de tu rival. Puedes elegir cualquier cantidad de Pokémon Básicos que encuentres entre ellas y ponerlos en su Banca. Tu rival pone el resto de las cartas de nuevo en su baraja y las baraja todas.",
			it: "Mostra le prime cinque carte del mazzo del tuo avversario. Puoi scegliere un numero qualsiasi di Pokémon Base presenti tra esse e metterli nella sua panchina. Il tuo avversario rimischia le altre carte nel suo mazzo.",
			pt: "Revele as 5 cartas de cima do baralho do seu oponente. Você pode escolher qualquer número de Pokémon Básicos que você encontrar lá e colocar aqueles Pokémon no Banco dele. Seu oponente embaralha as outras cartas de volta no baralho dele.",
			'es-mx': "Muestra las primeras 5 cartas del mazo de tu rival. Puedes elegir cualquier cantidad de Pokémon Básicos que encuentres entre ellas y ponerlos en su Banca. Tu rival baraja el resto de las cartas de nuevo en su mazo."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Ominous Eyes",
			fr: "Regard Menaçant",
			de: "Unheilvolle Augen",
			es: "Ojos Aciagos",
			it: "Sguardo Malevolo",
			pt: "Olhos Tenebrosos",
			'es-mx': "Ojos Ominosos"
		},

		effect: {
			en: "Place 5 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 5 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Lege 5 Schadensmarken auf 1 Pokémon deines Gegners.",
			es: "Pon 5 contadores de daño en uno de los Pokémon de tu rival.",
			it: "Metti cinque segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Coloque 5 contadores de dano em 1 dos Pokémon do seu oponente.",
			'es-mx': "Pon 5 contadores de daño en 1 de los Pokémon de tu rival."
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 726533,
		cardmarket: 918883
	}
}

export default card