import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Spinarak",
		fr: "Mimigal",
		de: "Webarak",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		'es-mx': "Spinarak"
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
			de: "Giftstachel",
			es: "Picotazo Veneno",
			it: "Velenospina",
			pt: "Ferrão Venenoso",
			'es-mx': "Piquete Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Bug Out",
			fr: "Horde d'Insectes",
			de: "Käferkomplott",
			es: "Bichos al Acecho",
			it: "Coleopanico",
			pt: "Insetofobia",
			'es-mx': "Insectofobia"
		},

		effect: {
			en: "Reveal the bottom 7 cards of your deck, and this attack does 50 damage for each Pokémon you find there that has the Bug Out attack. Then, shuffle any revealed Pokémon back into your deck. Discard the other cards.",
			fr: "Montrez les 7 cartes du dessous de votre deck. Cette attaque inflige 50 dégâts pour chaque Pokémon que vous y trouvez ayant l'attaque Horde d'Insectes. Mélangez ensuite les Pokémon montrés avec votre deck. Défaussez les autres cartes.",
			de: "Zeige deinem Gegner die untersten 7 Karten deines Decks, und diese Attacke fügt für jedes Pokémon, das du dort findest und das die Attacke Käferkomplott hat, 50 Schadenspunkte zu. Mische anschließend alle gezeigten Pokémon zurück in dein Deck. Lege die anderen Karten auf deinen Ablagestapel.",
			es: "Enseña las 7 últimas cartas de tu baraja, y este ataque hace 50 puntos de daño por cada Pokémon que encuentres entre ellas que tenga el ataque Bichos al Acecho. Después, pon todos los Pokémon que hayas enseñado de nuevo en tu baraja y baraja todas las cartas. Descarta el resto de las cartas.",
			it: "Mostra le ultime sette carte del tuo mazzo e questo attacco infligge 50 danni per ogni Pokémon presente tra esse che ha l'attacco Coleopanico. Poi rimischia i Pokémon che hai mostrato nel tuo mazzo. Scarta le altre carte.",
			pt: "Revele as 7 cartas de baixo do seu baralho, e este ataque causa 50 pontos de dano para cada Pokémon que você encontrar lá que tem o ataque Insetofobia. Em seguida, embaralhe quaisquer Pokémon revelados de volta no seu baralho. Descarte as outras cartas.",
			'es-mx': "Muestra las últimas 7 cartas de tu mazo, y este ataque hace 50 puntos de daño por cada Pokémon que encuentres entre ellas que tenga el ataque Insectofobia. Después, baraja todos los Pokémon que mostraste de nuevo en tu mazo. Descarta el resto de las cartas."
		},

		damage: "50×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 726532,
		cardmarket: 918881
	}
}

export default card