import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Magby",
         ja: "マグビー",
         fr: "Mouchard",
         de: "Magby",
         es: "Magby",
         it: "Magby",
         pt: "Magby",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [240],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Baby Evolution",
            ja: "赤ちゃんの進化",
            fr: "Évolution de bébé",
            de: "Babyentwicklung",
            es: "Evolución del bebé",
            it: "Evoluzione del bambino",
            pt: "Evolução do bebê",
          },
          effect: {
            en: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby) and remove all damage counters from Magby.",
            ja: "ターン中に（攻撃の前に）、マグマーをマグビーに乗せて（これは進化するマグビーとしてカウントされます）、Magbyからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Magmar de votre main sur Magby (cela compte comme Magby en évolution) et retirer tous les compteurs de dégâts de Magby.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Magmar von Ihrer Hand auf Magby stellen (dies zählt als sich entwickelnde Magby) und alle Schadenszähler von Magby entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede poner magmar de su mano en Magby (esto cuenta como evolucionando Magby) y eliminar todos los contadores de daño de Magby.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Magmar dalla tua mano su Magby (questo conta come Magby in evoluzione) e rimuovere tutti i contatori di danni da Magby.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar Magmar da sua mão no Magby (isso conta como magby em evolução) e remover todos os contadores de danos do Magby.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ignite",
            ja: "発火",
            fr: "Enflammer",
            de: "Entzünden",
            es: "Encender",
            it: "Accendere",
            pt: "Inflamar",
          },
          effect: {
            en: "If 74 is in play, the Defending Pokemon is now Burned.",
            ja: "74が機能している場合、防御するポケモンは燃えています。",
            fr: "Si 74 est en jeu, le Pokémon en défense est maintenant brûlé.",
            de: "Wenn 74 im Spiel ist, wird das verteidigende Pokémon jetzt verbrannt.",
            es: "Si 74 está en juego, el Pokémon defensor ahora se quema.",
            it: "Se 74 è in gioco, il Pokemon in carica viene ora bruciato.",
            pt: "Se 74 estiver em jogo, o Pokémon atual está queimado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
