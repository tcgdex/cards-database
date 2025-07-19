import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Typhlosion (Delta Species)",
         ja: "Typhlosion（デルタ種）",
         fr: "Typhlosion (espèces delta)",
         de: "Typhlosion (Delta -Arten)",
         es: "Tiflosión (especie delta)",
         it: "Tiflosione (specie delta)",
         pt: "Typhlosion (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Shady Move",
            ja: "日陰の動き",
            fr: "Mouvement ombragé",
            de: "Schattige Bewegung",
            es: "Movimiento sombreado",
            it: "Mossa ombreggiata",
            pt: "Movimento sombrio",
          },
          effect: {
            en: "Once during your turn (before your attack), if Typhlosion is your Active PokÃ©mon, you may move 1 damage counter from either player's PokÃ©mon to another PokÃ©mon (yours or your opponent's). This power can't be used if Typhlosion is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）、TyphlosionがアクティブなPokã©Monである場合、いずれかのプレイヤーのPokã©Monから別のPokã©Mon（あなたまたは相手）に1ダメージカウンターを移動できます。害虫が特別な状態の影響を受ける場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Typhlosion est votre poké actif, vous pouvez déplacer 1 compteur de dégâts de l'une ou l'autre des Poké du joueur à un autre Pokã © Mon (le vôtre ou celui de votre adversaire). Cette puissance ne peut pas être utilisée si la typhlosion est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Typhlosion Ihr aktiver Pokémon ist, können Sie 1 Schadenschalter von der beiden Spieler in einen anderen Poké Mon (Ihr oder Ihr Gegner) verlagern. Diese Leistung kann nicht verwendet werden, wenn die Typhlosion durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), si la Typhlosion es su Poké Mon activo, puede mover 1 contador de daño de cualquiera de los jugadores Poké Mon a otro Poké Mon (el tuyo o el de tu oponente). Esta potencia no se puede usar si la tiflosión se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se la tiflosione è il tuo poké attivo, puoi spostare 1 contatore di danni dal poké del giocatore a un altro poké mon (il tuo o il tuo avversario). Questo potere non può essere utilizzato se la tiflosione è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se a Typhlosion for o seu Poké de Mon ativo, você poderá mover 1 contador de danos do Poké de qualquer um dos jogadores para outro Poké Mon (seu ou do seu oponente). Esse poder não pode ser usado se a tiflosão for afetada por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Burning Ball",
            ja: "燃えるボール",
            fr: "Balle brûlante",
            de: "Brennkugel",
            es: "Bola ardiente",
            it: "Palla in fiamme",
            pt: "Bola ardente",
          },
          effect: {
            en: "If Typhlosion has at least 2 Fire Energy attached to it, the Defending Pokemon is now Burned.",
            ja: "Typhlosionに少なくとも2つの火エネルギーが付着している場合、防御ポケモンが燃やされています。",
            fr: "Si la typhlosion a au moins 2 énergie de feu qui y est attachée, le Pokémon en défense est maintenant brûlé.",
            de: "Wenn die Typhlosion mindestens 2 Feuerenergie anhält, wird das verteidigende Pokémon nun verbrannt.",
            es: "Si la tiflosión tiene al menos 2 energía de fuego unida a ella, el pokemon defensor ahora se quema.",
            it: "Se la tiflosione ha almeno 2 energia di fuoco attaccata ad esso, il Pokemon in carica viene ora bruciato.",
            pt: "Se a Typhlosion tiver pelo menos 2 energia de incêndio ligada a ela, o Pokemon defensor agora está queimado.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
