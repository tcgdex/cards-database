import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Azurill",
		fr: "Azurill",
		es: "Azurill",
		it: "Azurill",
		pt: "Azurill",
		de: "Azurill"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		298,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Growing Up",
				fr: "Maturation",
				es: "Crecimiento",
				it: "Sviluppo",
				pt: "Cresça e Apareça",
				de: "Heranwachsen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a basic Energy card from your discard pile to your Active Pokémon. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, attachez une carte Énergie de base de votre pile de défausse à votre Pokémon Actif. Si vous utilisez ce talent, votre tour se termine.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, une 1 carta de Energía Básica de tu pila de descartes a tu Pokémon Activo. Si usas esta habilidad, tu turno termina.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, assegna al tuo Pokémon attivo una carta Energia base dalla tua pila degli scarti. Se usi questa abilità, il tuo turno finisce.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, ligue 1 carta de Energia básica da sua pilha de descarte ao seu Pokémon Ativo. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Lege bei Kopf 1 Basis-Energiekarte aus deinem Ablagestapel an dein Aktives Pokémon an. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 408374
	}
}

export default card
