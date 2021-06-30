import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ditto ◇",
		fr: "Métamorph ◇",
		es: "Ditto ◇",
		it: "Ditto ◇",
		pt: "Ditto ◇",
		de: "Ditto ◇"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Almighty Evolution",
				fr: "Évolution Toute-Puissante",
				es: "Evolución Poderosa",
				it: "Evoluzione Onnipotente",
				pt: "Evolução Onipotente",
				de: "Universalentwicklung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put any Stage 1 card from your hand onto this Pokémon to evolve it. You can’t use this Ability during your first turn or the turn this Pokémon was put into play.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer n’importe quelle carte de Niveau 1 de votre main sur ce Pokémon pour le faire évoluer. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner cualquier carta de Fase 1 de tu mano sobre este Pokémon para hacerlo evolucionar. No puedes usar esta habilidad durante tu primer turno o en el turno en que este Pokémon se haya puesto en juego.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi prendere una carta qualsiasi di Fase 1 dalla tua mano e metterla su questo Pokémon per farlo evolvere. Non puoi usare questa abilità durante il tuo primo turno o durante il turno in cui questo Pokémon è stato messo in gioco.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar qualquer carta de Estágio 1 da sua mão sobre este Pokémon para evoluí-lo. Você não pode usar esta Habilidade durante a sua primeira vez de jogar ou na rodada em que este Pokémon entrar em jogo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du eine beliebige Phase-1-Karte aus deiner Hand auf dieses Pokémon legen, um es zu entwickeln. Du kannst diese Fähigkeit nicht während deines ersten Zuges oder während des Zuges, in dem dieses Pokémon ins Spiel gebracht wurde, einsetzen."
			},
		},
	],
	attacks: [
		{

			name: {
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},


		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
