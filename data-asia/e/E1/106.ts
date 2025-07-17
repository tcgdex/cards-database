import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Typhlosion - 106/128",
         ja: "Typhlosion -106/128",
         fr: "Typhlosion - 106/128",
         de: "Typhlosion - 106/128",
         es: "Typhlosion - 106/128",
         it: "Typhlosion - 106/128",
         pt: "Typhlosion - 106/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 100,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Heat Up",
            ja: "加熱します",
            fr: "Chauffer",
            de: "Erhitzen",
            es: "Calentar",
            it: "Riscalda",
            pt: "Aqueça",
          },
          effect: {
            en: "Once during your turn <em>(before your attack),</em> you may count the total number of Energy cards attached to all of your Pokmon and all of your opponent's Pokmon. If your opponent has more total Energy cards attached, you may search your deck for 1 Fire Energy card and attach it to 1 of your Benched Pokmon, if any. Shuffle your deck afterward. This power can't be used if Typhlosion is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）、</em>は、すべてのPokmonと対戦相手のすべてのPokmonに取り付けられたエネルギーカードの総数を数えることができます。対戦相手がより多くのエネルギーカードを添付している場合は、デッキを1つのFire Energyカードで検索し、ベンチ付きPokmonの1つに添付することができます。その後、デッキをシャッフルします。害虫が特別な状態の影響を受ける場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque), </em> vous pouvez compter le nombre total de cartes d'énergie attachées à tous vos Pokmon et à tous les pokmon de votre adversaire. Si votre adversaire dispose de plus de cartes d'énergie totales, vous pouvez rechercher votre jeu pour 1 carte d'énergie de feu et la fixer à 1 de votre pokmon banc, le cas échéant. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si la typhlosion est affectée par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff), können Sie die Gesamtzahl der an Ihren Pokmon und alle Pokmon Ihres Gegners angeschlossenen Energiekarten zählen. Wenn Ihr Gegner mehr totale Energiekarten angeschlossen hat, können Sie Ihr Deck nach 1 Feuerergiekarte durchsuchen und sie an 1 Ihrer Bank -Pokmon anbringen, falls vorhanden. Mischen Sie anschließend Ihr Deck. Diese Leistung kann nicht verwendet werden, wenn die Typhlosion durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque), </em> puede contar el número total de cartas de energía unidas a todos sus Pokmon y todo el Pokmon de su oponente. Si su oponente tiene más cartas de energía total unidas, puede buscar en su mazo 1 tarjeta de energía de fuego y adjuntarlo a 1 de su Pokmon de banca, si es que hay alguna. Baraja tu mazo después. Esta potencia no se puede usar si la tiflosión se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco), </em> puoi contare il numero totale di carte di energia collegate a tutti i Pokmon e tutti i Pokmon del tuo avversario. Se il tuo avversario ha più schede di energia totali collegate, puoi cercare nel tuo mazzo 1 carta di energia antincendio e attaccarlo a 1 del tuo Pokmon in panchina, se presente. Shuffle il tuo mazzo in seguito. Questo potere non può essere utilizzato se la tiflosione è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque), você pode contar o número total de cartões de energia anexados a todo o seu Pokmon e todo o Pokmon do seu oponente. Se o seu oponente tiver mais cartões de energia totais anexados, você poderá pesquisar seu baralho por 1 cartão de energia de incêndio e conectá -lo a 1 do seu Pokmon em bancada, se houver. Afaste seu baralho depois. Esse poder não pode ser usado se a tiflosão for afetada por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Super Singe",
            ja: "スーパーシング",
            fr: "Super singe",
            de: "Super singen",
            es: "Super Singe",
            it: "Super Singe",
            pt: "Super Singe",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está queimado.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
