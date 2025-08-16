import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Charizard & Braixen GX",
		fr: "Dracaufeu et Roussil GX",
		es: "Charizard y Braixen GX",
		it: "Charizard e Braixen GX",
		pt: "Charizard e Braixen GX",
		de: "Glurak & Rutena GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
		654
	],

	hp: 270,

	types: [
		"Fire",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Brilliant Flare",
				fr: "Flamboiement Brillant",
				es: "Llamarada Brillante",
				it: "Fiammata Brillante",
				pt: "Chama Cintilante",
				de: "Prächtige Flamme"
			},
			effect: {
				en: "You may search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Vous pouvez chercher jusqu’à 3 cartes dans votre deck et les ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Puedes buscar en tu baraja hasta 3 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Puoi cercare nel tuo mazzo fino a tre carte e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Você pode procurar por até 3 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Du kannst dein Deck nach bis zu 3 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
			damage: 180,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Crimson Flame Pillar GX",
				fr: "Colonne de Flamme Écarlate GX",
				es: "Pilar de Llamas Carmesís GX",
				it: "Scia di Fuoco Rosso GX",
				pt: "Coluna de Chamas Carmim GX",
				de: "Feuerrote Flammensäule GX"
			},
			effect: {
				en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), your opponent’s Active Pokémon is now Burned and Confused. (You can’t use more than 1 GX attack in a game.)",
				fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Une 5 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees. Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), el Pokémon Activo de tu rival pasa a estar Confundido y Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Assegna a piacimento ai tuoi Pokémon cinque carte Energia base dalla tua pila degli scarti. Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, il Pokémon attivo del tuo avversario viene bruciato e confuso. Non puoi usare più di un attacco GX a partita.",
				pt: "Ligue 5 cartas de Energia básica da sua pilha de descarte aos seus Pokémon como desejar. Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), o Pokémon Ativo do seu oponente será Confundido e Queimado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 5 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an. Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), ist das Aktive Pokémon deines Gegners jetzt verbrannt und verwirrt. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Colonne de Flamme Écarlate-GX",
			},
			effect: {
				fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 398454,
		tcgplayer: 201332
	}
}

export default card
