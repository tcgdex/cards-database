import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Elekid",
         ja: "Elekid",
         fr: "Elekid",
         de: "Elekid",
         es: "Elekid",
         it: "Elekid",
         pt: "Elekid",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [239],
      hp: 50,
      types: ["Lightning"],
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
            en: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.",
            ja: "ターン中（攻撃の前に）ターン中に、ElectabuzzをElekid（これは進化するElekidとしてカウント）にElectabuzzを置き、Elekidからすべてのダメージカウンターを削除できます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Electabuzz de votre main sur Elekid (cela compte comme Elekid en évolution) et retirer tous les compteurs de dégâts d'Elekid.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Electabuzz von Ihrer Hand auf Elekid stellen (dies zählt als sich entwickelnde Elekid) und alle Schadenszähler von Ekid entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar electabuzz de su mano en Elekid (esto cuenta como Elekid en evolución) y eliminar todos los contadores de daño de Elekid.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Electabuzz dalla tua mano a Elekid (questo conta come Elekid in evoluzione) e rimuovere tutti i contatori di danno da Elekid.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar o Electabuzz da sua mão no Elekid (isso conta como elekid em evolução) e remover todos os contadores de danos de Elekid.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Magnetic Trip",
            ja: "磁気旅行",
            fr: "Voyage magnétique",
            de: "Magnetische Reise",
            es: "Viaje magnético",
            it: "Viaggio magnetico",
            pt: "Viagem magnética",
          },
          effect: {
            en: "If Low Pressure System is in play, the Defending Pokemon is now Confused.",
            ja: "低圧システムが機能している場合、防御ポケモンは混乱しています。",
            fr: "Si le système de basse pression est en jeu, le Pokémon en défense est désormais confus.",
            de: "Wenn das Niederdrucksystem im Spiel ist, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si el sistema de baja presión está en juego, el Pokémon defensor ahora está confundido.",
            it: "Se è in gioco un sistema a bassa pressione, il Pokemon in difesa è ora confuso.",
            pt: "Se o sistema de baixa pressão estiver em jogo, o Pokemon atual agora está confuso.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
