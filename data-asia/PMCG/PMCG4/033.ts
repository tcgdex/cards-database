import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Drowzee",
         ja: "ドロージー",
         fr: "Drowzee",
         de: "Drowzee",
         es: "Drowzee",
         it: "Drowzee",
         pt: "Drowzee",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [96],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Long-Distance Hypnosis",
            ja: "長距離催眠",
            fr: "Hypnose à longue distance",
            de: "Langstreckenhypnose",
            es: "Hipnosis a larga distancia",
            it: "Ipnosi a distanza",
            pt: "Hipnose de longa distância",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, the Defending Pokmon is now Asleep; if tails, your Active Pokmon is now Asleep. The power can't be used if Drowzee is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、防御するポクモンは今眠っています。尾の場合、あなたのアクティブなポクモンは今眠っています。 Drowzeeが特別な状態の影響を受ける場合、電力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, le Pokmon en défense est maintenant endormi; Si Tails, votre Pokmon actif est maintenant endormi. La puissance ne peut pas être utilisée si Drowzee est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Köpfe, schläft das verteidigende Pokmon jetzt; Wenn Schwänze, schläft Ihr aktives Pokmon jetzt. Die Leistung kann nicht verwendet werden, wenn Drowzee von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, el Pokmon defensor ahora está dormido; Si Tails, su Pokmon activo ahora está dormido. La potencia no se puede usar si Drowzee se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, il Pokmon in carica è ora addormentato; Se le code, il tuo Pokmon attivo ora dorme. La potenza non può essere utilizzata se Drowzee è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, o defesa do Pokmon agora está dormindo; Se as caudas, seu Pokmon ativo agora está dormindo. O poder não pode ser usado se Drowzee for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Nightmare",
            ja: "悪夢",
            fr: "Cauchemar",
            de: "Alptraum",
            es: "Pesadilla",
            it: "Incubo",
            pt: "Pesadelo",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
