import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Victreebel",
         ja: "Victreebel",
         fr: "Victreebel",
         de: "Victreebel",
         es: "Victreebel",
         it: "Victreebel",
         pt: "Victreebel",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [71],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Nectar Pod",
            ja: "ネクターポッド",
            fr: "Nectar",
            de: "Nektarschote",
            es: "Vaina de néctar",
            it: "Pod nettare",
            pt: "POD de néctar",
          },
          effect: {
            en: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Stage 2 Evolved PokÃ©mon with 1 of the Defending PokÃ©mon. Your opponent chooses the Defending PokÃ©mon to switch. This power can't be used if Victreebel is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、対戦相手のベンチにあるステージ2の1つの進化したポカモンを防御するポカモンと交換することができます。対戦相手は、防御するポカモンを選択して切り替えます。 Victreebelが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez changer 1 de l'étape bancée de votre adversaire 2 a évolué Pokã © Mon avec 1 des Poké en défense. Votre adversaire choisit le Poké en défense pour changer. Cette puissance ne peut pas être utilisée si Victreebel est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie 1 der vom Stufe 2 des Gegners entwickelten Poké Mons mit 1 der verteidigenden Poké Mons wechseln. Ihr Gegner wählt den verteidigenden Poké Mon Mon, um zu wechseln. Diese Kraft kann nicht verwendet werden, wenn Victreebel von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede cambiar 1 de la etapa de banca 2 de su oponente evolucionó Poké Mon con 1 de la defensa de Poké Mon. Tu oponente elige al Poké Mon defensor para cambiar. Esta potencia no se puede usar si Victreebel se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cambiare 1 della fase 2 del tuo avversario evoluto Poké mon con 1 del poké difensore. Il tuo avversario sceglie il poké in difesa da cambiare. Questa potenza non può essere utilizzata se Victreebel è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode mudar 1 do estágio 2 do estágio 2 do seu oponente evoluído com 1 do Poké Mon. Seu oponente escolhe o Poké Mon em defesa para mudar. Esse poder não pode ser usado se Victreebel for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Sleep Poison",
            ja: "眠り毒",
            fr: "Poison de sommeil",
            de: "Schlafgift",
            es: "Veneno del sueño",
            it: "Veleno per dormire",
            pt: "Veneno do sono",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep and Poisoned.",
            ja: "防御するポケモンは今眠っていて毒されています。",
            fr: "Le Pokémon en défense est maintenant endormi et empoisonné.",
            de: "Das verteidigende Pokémon schläft jetzt und vergiftet.",
            es: "El Pokémon defensor ahora está dormido y envenenado.",
            it: "Il Pokemon in carica è ora addormentato e avvelenato.",
            pt: "O Pokémon atual está agora dormindo e envenenado.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Sharp Leaf",
            ja: "鋭い葉",
            fr: "Feuille aiguisée",
            de: "Scharfes Blatt",
            es: "Hoja afilada",
            it: "Foglia affilata",
            pt: "Folha afiada",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 30 mais danos.",
          },
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
