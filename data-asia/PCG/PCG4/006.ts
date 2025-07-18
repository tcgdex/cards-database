import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Ariados",
         ja: "アリアドス",
         fr: "Ariados",
         de: "Ariados",
         es: "Ariados",
         it: "Ariados",
         pt: "ARIADOS",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [168],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Reactive Poison",
            ja: "反応毒",
            fr: "Poison réactif",
            de: "Reaktives Gift",
            es: "Veneno reactivo",
            it: "Veleno reattivo",
            pt: "Veneno reativo",
          },
          effect: {
            en: "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokemon.",
            ja: "防御ポケモンに影響を与える特別な状態ごとに、10のダメージと30のダメージを与えます。",
            fr: "Fait 10 dégâts plus 30 dommages supplémentaires pour chaque condition spéciale affectant le Pokémon en défense.",
            de: "Fügt 10 Schäden plus 30 weitere Schäden für jeden besonderen Zustand, der das verteidigende Pokémon betrifft.",
            es: "Hace 10 daños más 30 más de daño por cada condición especial que afecta al Pokémon defensor.",
            it: "Fa 10 danni più 30 danni in più per ogni condizione speciale che colpisce il Pokemon in difesa.",
            pt: "10 danos mais 30 mais danos para cada condição especial que afeta o pokemon defensor.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Spider Trap",
            ja: "スパイダートラップ",
            fr: "Piège à araignée",
            de: "Spinnenfalle",
            es: "Trampa de araña",
            it: "Spider Trap",
            pt: "Armadilha de aranha",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. If you do, the new Defending Pokemon is now Asleep and Poisoned. Your opponent chooses the Defending Pokemon to switch.",
            ja: "防御するポケモンは今眠っていて毒されています。この効果を適用する前に、対戦相手のベンチポケモンを1匹の防御ポケモンに切り替えることができます。もしそうなら、新しい防御ポケモンは眠って毒されています。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Le Pokémon en défense est maintenant endormi et empoisonné. Avant d'appliquer cet effet, vous pouvez changer 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Si vous le faites, le nouveau Pokémon défendant est maintenant endormi et empoisonné. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Das verteidigende Pokémon schläft jetzt und vergiftet. Bevor Sie diesen Effekt anwenden, können Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon wechseln. Wenn Sie dies tun, schläft das neue verteidigende Pokemon jetzt und vergiftet. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "El Pokémon defensor ahora está dormido y envenenado. Antes de aplicar este efecto, puede cambiar 1 de los Pokémon de banca de su oponente con 1 del Pokémon defensor. Si lo haces, el nuevo Pokémon defensor ahora está dormido y envenenado. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Il Pokemon in carica è ora addormentato e avvelenato. Prima di applicare questo effetto, è possibile cambiare 1 del Pokemon in panchina del tuo avversario con 1 dei Pokemon in difesa. Se lo fai, il nuovo Pokemon in carica è ora addormentato e avvelenato. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "O Pokémon atual está agora dormindo e envenenado. Antes de aplicar esse efeito, você pode alternar 1 do Pokémon em bancada do seu oponente com 1 dos Pokémon defensores. Se o fizer, o novo Pokémon defensor agora está dormindo e envenenado. Seu oponente escolhe o pokemon defensor para mudar.",
          },
        },
      ],

      retreat: 1,

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
