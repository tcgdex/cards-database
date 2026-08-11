import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Lance ◇",
		'fr-fr': "Peter ◇",
		'es-es': "Lance ◇",
		'it-it': "Lance ◇",
		'pt-br': "Lance ◇",
		'de-de': "Siegfried ◇"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play this card only if 1 of your Pokémon was Knocked Out during your opponent’s last turn.\n\nSearch your deck for up to 2 Dragon Pokémon and put them onto your Bench. Then, shuffle your deck.",
		'fr-fr': "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nCherchez jusqu’à 2 Pokémon Dragon dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'es-es': "Puedes jugar esta carta solo si 1 de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival.\n\nBusca en tu baraja hasta 2 Pokémon Dragon y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'it-it': "Puoi giocare questa carta solo se uno dei tuoi Pokémon è stato messo KO durante l’ultimo turno del tuo avversario.\n\nCerca nel tuo mazzo fino a due Pokémon Dragon e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Você só pode jogar esta carta se 1 dos seus Pokémon tiver sido Nocauteado durante a última vez de jogar do seu oponente.\n\nProcure por até 2 Pokémon Dragon no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		'de-de': "Du kannst diese Karte nur spielen, wenn 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde.\n\nDurchsuche dein Deck nach bis zu 2 Dragon-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
	}
}

export default card
