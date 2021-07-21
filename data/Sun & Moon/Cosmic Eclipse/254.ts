import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Solgaleo & Lunala-GX",
		fr: "Solgaleo et Lunala-GX",
		es: "Solgaleo y Lunala-GX",
		it: "Solgaleo e Lunala-GX",
		pt: "Solgaleo e Lunala-GX",
		de: "Solgaleo & Lunala-GX"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 270,
	types: [
		"Psychic",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Cosmic Burn",
				fr: "Brûlure Cosmique",
				es: "Quemadura Cósmica",
				it: "Pirocosmo",
				pt: "Queimadura Cósmica",
				de: "Kosmischer Schaden"
			},
			effect: {
				en: "This Pokémon can’t use Cosmic Burn during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Brûlure Cosmique pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Quemadura Cósmica durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pirocosmo.",
				pt: "Este Pokémon não poderá usar Queimadura Cósmica durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Kosmischer Schaden während deines nächsten Zuges nicht einsetzen."
			},
			damage: 230,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],

			name: {
				en: "Light of the Protector GX",
				fr: "Lumière de la Protectrice GX",
				es: "Luz de la Protectora GX",
				it: "Luce Protettrice GX",
				pt: "Luz da Protetora GX",
				de: "Licht der Beschützerin GX"
			},

			effect: {
				en: "If you played Lillie’s Full Force from your hand during this turn, prevent all effects of attacks, including damage, done to each of your Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si vous avez joué Pleine Puissance de Lilie de votre main pendant ce tour, évitez tous les effets d’attaques, y compris les dégâts, infligés à chacun de vos Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si has jugado 1 carta de Máxima Potencia de Lylia de tu mano durante este turno, evita todos los efectos de los ataques, incluido el daño, infligidos a cada uno de tus Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se hai giocato Lylia alla Massima Potenza dalla tua mano durante questo turno, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti ai tuoi Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Se você jogou Força Total da Lílian da sua mão durante esta vez de jogar, prevenirá todos os efeitos de ataques, incluindo dano, causados a cada um dos seus Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn du Lillys ganze Kraft während dieses Zuges aus deiner Hand gespielt hast, verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die jedem deiner Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 200
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
