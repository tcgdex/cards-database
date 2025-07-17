import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Swellow",
         ja: "スウラー",
         fr: "Sombrer",
         de: "Swellow",
         es: "Brillo",
         it: "Taswello",
         pt: "Swellow",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Drive Off",
            ja: "ドライブします",
            fr: "Parcourir",
            de: "Losfahren",
            es: "Ahuyentar",
            it: "Scatene",
            pt: "Saia",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Swellow is your Active Pokémon, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent picks the Benched Pokémon to switch. This power can't be used if Swellow is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、スウェローがあなたのアクティブなポケモンである場合、1つの防御ポケモンを相手のベンチ付きポケモンと交換することができます。対戦相手は、ベンチ付きポケモンを選択して切り替えます。 Swelloが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (Avant votre attaque) </em>, si Swellow est votre Pokémon actif, vous pouvez changer 1 des Pokémon en défense avec un des Pokémon bancés de votre adversaire. Votre adversaire choisit le Pokémon bancaire pour changer. Cette puissance ne peut pas être utilisée si Swellow est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Swellow Ihr aktives Pokémon ist, können Sie 1 des verteidigenden Pokémon mit einem der pokémon des Gegners wechseln. Ihr Gegner nimmt das Bank -Pokémon zum Wechseln aus. Diese Kraft kann nicht verwendet werden, wenn Swellow von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Swellow es su Pokémon activo, puede cambiar 1 de los Pokémon defensores con 1 de los Pokémon de su oponente. Tu oponente elige el Pokémon de banca para cambiar. Esta potencia no se puede usar si SWellow se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Swellow è il tuo Pokémon attivo, puoi cambiare 1 dei Pokémon in difesa con 1 dei Pokémon in panchina del tuo avversario. Il tuo avversario raccoglie i Pokémon in panchina per cambiare. Questa potenza non può essere utilizzata se Swellow è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se Swellow for o seu Pokémon ativo, você pode mudar 1 do Pokémon atual com 1 do Pokémon em banco do seu oponente. Seu oponente escolhe o Pokémon em banco para mudar. Esse poder não pode ser usado se Swellow for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
